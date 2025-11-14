#!/usr/bin/env python3
"""
Test spawning Claude Code directly without tmux
"""

import subprocess
import time
import sys

def test_claude_process():
    """Try to spawn a Claude Code process and interact with it"""
    print("Testing Claude Code process spawn...")

    try:
        # Try to spawn Claude Code with subprocess
        process = subprocess.Popen(
            ['claude'],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            bufsize=1
        )

        print(f"✅ Process started with PID: {process.pid}")
        print(f"Waiting 5 seconds for initialization...")
        time.sleep(5)

        # Check if process is still running
        poll = process.poll()
        if poll is not None:
            print(f"❌ Process exited with code: {poll}")
            stdout, stderr = process.communicate()
            print(f"STDOUT: {stdout}")
            print(f"STDERR: {stderr}")
            return False

        print(f"✅ Process still running after 5 seconds")

        # Try to send input
        print("Sending 'hi' message...")
        try:
            process.stdin.write("hi\n")
            process.stdin.flush()
            print("✅ Sent message")
        except Exception as e:
            print(f"❌ Failed to send message: {e}")
            return False

        # Wait a bit for response
        print("Waiting 10 seconds for response...")
        time.sleep(10)

        # Check for output (non-blocking)
        print("Checking for output...")
        process.stdin.close()

        # Give it a moment
        time.sleep(2)

        # Read any available output
        try:
            # Set a timeout
            stdout, stderr = process.communicate(timeout=5)
            print(f"STDOUT:\n{stdout}")
            print(f"STDERR:\n{stderr}")
        except subprocess.TimeoutExpired:
            print("⚠️  Process still running, killing it...")
            process.kill()
            stdout, stderr = process.communicate()
            print(f"STDOUT:\n{stdout}")
            print(f"STDERR:\n{stderr}")

        return True

    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    test_claude_process()
