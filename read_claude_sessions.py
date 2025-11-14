#!/usr/bin/env python3
"""
Helper script to read all Claude Code tmux sessions.
"""

import subprocess

def run_command(cmd):
    """Run a shell command and return the result."""
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            capture_output=True,
            text=True,
            timeout=10
        )
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def read_tmux_pane(session_name):
    """Read the contents of a tmux pane."""
    success, stdout, stderr = run_command(
        f"tmux capture-pane -t {session_name} -p"
    )
    return stdout if success else stderr

def main():
    base_session_name = "claude_test"
    num_instances = 5

    print("=" * 60)
    print("📖 Reading all Claude Code sessions")
    print("=" * 60)

    for i in range(1, num_instances + 1):
        session_name = f"{base_session_name}_{i}"
        print(f"\n{'='*60}")
        print(f"📺 Session: {session_name}")
        print(f"{'='*60}")
        content = read_tmux_pane(session_name)
        print(content)
        print()

if __name__ == "__main__":
    main()
