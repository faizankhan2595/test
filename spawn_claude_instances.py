#!/usr/bin/env python3
"""
Script to spawn multiple Claude Code instances in tmux sessions
and send them prompts independently.
"""

import subprocess
import time
import sys

def run_command(cmd, shell=True):
    """Run a shell command and return the result."""
    try:
        result = subprocess.run(
            cmd,
            shell=shell,
            capture_output=True,
            text=True,
            timeout=30
        )
        return result.returncode == 0, result.stdout, result.stderr
    except subprocess.TimeoutExpired:
        return False, "", "Command timed out"
    except Exception as e:
        return False, "", str(e)

def create_tmux_session(session_name):
    """Create a new tmux session."""
    # Kill existing session if it exists
    run_command(f"tmux kill-session -t {session_name} 2>/dev/null")

    # Create new detached session
    success, stdout, stderr = run_command(
        f"tmux new-session -d -s {session_name}"
    )
    return success

def send_to_tmux_session(session_name, text):
    """Send text to a tmux session."""
    # Send the text
    success1, _, _ = run_command(
        f"tmux send-keys -t {session_name} '{text}' C-m"
    )
    return success1

def list_tmux_sessions():
    """List all tmux sessions."""
    success, stdout, stderr = run_command("tmux list-sessions")
    return stdout if success else ""

def read_tmux_pane(session_name):
    """Read the contents of a tmux pane."""
    success, stdout, stderr = run_command(
        f"tmux capture-pane -t {session_name} -p"
    )
    return stdout if success else stderr

def main():
    num_instances = 5
    base_session_name = "claude_test"

    print(f"🚀 Spawning {num_instances} Claude Code instances...")
    print("=" * 60)

    # Create sessions and launch Claude Code
    for i in range(1, num_instances + 1):
        session_name = f"{base_session_name}_{i}"
        print(f"\n📝 Creating session: {session_name}")

        if create_tmux_session(session_name):
            print(f"✅ Session {session_name} created")

            # Give tmux a moment to initialize
            time.sleep(0.5)

            # Launch Claude Code in the session
            print(f"🤖 Launching Claude Code in {session_name}...")
            send_to_tmux_session(session_name, "claude")

            # Wait for Claude Code to start
            time.sleep(2)

            # Send "hi" prompt
            print(f"💬 Sending 'hi' to {session_name}...")
            send_to_tmux_session(session_name, "hi")

        else:
            print(f"❌ Failed to create session {session_name}")

    print("\n" + "=" * 60)
    print("✨ All instances spawned!")
    print("\n📋 Active tmux sessions:")
    print(list_tmux_sessions())

    print("\n🔍 To attach to a session, use:")
    for i in range(1, num_instances + 1):
        print(f"   tmux attach-session -t {base_session_name}_{i}")

    print("\n⏰ Waiting 5 minutes before checking responses...")
    print("   (You can manually attach to sessions in the meantime)")

    # Wait 5 minutes (300 seconds)
    wait_time = 300
    for remaining in range(wait_time, 0, -30):
        print(f"   ⏳ {remaining} seconds remaining...")
        time.sleep(30)

    print("\n" + "=" * 60)
    print("📖 Reading responses from all Claude Code instances...")
    print("=" * 60)

    # Read and display responses from each session
    for i in range(1, num_instances + 1):
        session_name = f"{base_session_name}_{i}"
        print(f"\n{'='*60}")
        print(f"📺 Output from {session_name}:")
        print(f"{'='*60}")
        content = read_tmux_pane(session_name)
        print(content)

    print("\n" + "=" * 60)
    print("✅ All responses captured!")
    print("\n💡 Sessions are still running. To interact with them:")
    for i in range(1, num_instances + 1):
        print(f"   tmux attach-session -t {base_session_name}_{i}")

    print("\n🛑 To kill all sessions:")
    print(f"   tmux kill-session -t {base_session_name}_1")
    print(f"   ... (repeat for each session)")
    print("\n   Or kill all at once:")
    for i in range(1, num_instances + 1):
        print(f"   tmux kill-session -t {base_session_name}_{i}")

if __name__ == "__main__":
    main()
