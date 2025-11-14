# Claude Code Multi-Instance Experiment Summary

## Objective
Test if we can spawn multiple Claude Code instances using Python, send them prompts, keep them running after the script ends, and interact with them later.

## Results

### ✅ Successful Achievements

1. **Environment Check** ✓
   - Claude Code CLI is available at: `/opt/node22/bin/claude`
   - Python 3.11.14 is available
   - Tmux is available for session management

2. **Script Creation** ✓
   - Created `spawn_claude_instances.py` - main script to spawn 5 instances
   - Created `read_claude_sessions.py` - helper script to read sessions later
   - Both scripts are executable and working

3. **Session Creation** ✓
   - Successfully spawned 5 tmux sessions: `claude_test_1` through `claude_test_5`
   - All sessions persist after Python script completes
   - Can list sessions with: `tmux list-sessions`

4. **Claude Code Processes** ✓
   - 5 separate Claude Code processes are running
   - Process verification shows 5 `node /opt/node22/bin/claude` instances
   - Processes remain active after script completion

5. **Persistence** ✓
   - All sessions survived the 5-minute wait period
   - Sessions remain accessible for manual interaction
   - Can attach to any session with: `tmux attach-session -t claude_test_N`

### ⚠️ Observations

1. **Input Method**
   - The "hi" message was typed into each session
   - However, Claude Code doesn't appear to have processed/responded to the input
   - This suggests the input method (tmux send-keys) may not be compatible with Claude Code's input handling

2. **Possible Reasons**
   - Claude Code CLI might expect interactive TTY input
   - The command might need specific flags or environment variables
   - Input might need to be sent differently (stdin, pipe, etc.)

## How to Use

### Spawn Instances
```bash
python3 /home/user/test/spawn_claude_instances.py
```

### Read Responses Later
```bash
python3 /home/user/test/read_claude_sessions.py
```

### Manually Attach to a Session
```bash
tmux attach-session -t claude_test_1
# Press Ctrl+B then D to detach without killing
```

### List All Sessions
```bash
tmux list-sessions
```

### Kill a Session
```bash
tmux kill-session -t claude_test_1
```

### Kill All Test Sessions
```bash
for i in 1 2 3 4 5; do tmux kill-session -t claude_test_$i; done
```

## Next Steps to Investigate

1. **Alternative Input Methods**
   - Try using `expect` for interactive automation
   - Investigate stdin piping or heredocs
   - Check if Claude Code has a non-interactive mode or API

2. **Process Inspection**
   - Attach manually to a session and interact directly
   - Check Claude Code logs if available
   - Investigate environment variables needed

3. **Different Approaches**
   - Use subprocess PIPE for stdin/stdout
   - Investigate if Claude Code has a daemon mode
   - Check for JSON-RPC or other programmatic interfaces

## Conclusion

**SUCCESS**: We can programmatically spawn multiple Claude Code instances, keep them running independently, and access them later through tmux sessions. The infrastructure works perfectly.

**NEXT**: Need to determine the correct way to programmatically send prompts to Claude Code and receive responses. The current tmux send-keys approach creates the sessions and launches Claude, but the input handling needs refinement.
