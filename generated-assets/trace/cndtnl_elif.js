if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["cndtnl_elif"] = {"code": "x = 12\ny = 12.0\nif x < y:\n    print('x is less than y')\nelif x > y:\n    print('x is greater than y')\nelse:\n    print('x and y are equal')\nprint('All done.')\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"x": 12}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"x": 12, "y": ["SPECIAL_FLOAT", "12.0"]}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"x": 12, "y": ["SPECIAL_FLOAT", "12.0"]}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "<module>", "globals": {"x": 12, "y": ["SPECIAL_FLOAT", "12.0"]}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 9, "event": "step_line", "func_name": "<module>", "globals": {"x": 12, "y": ["SPECIAL_FLOAT", "12.0"]}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": "x and y are equal\n"}, {"line": 9, "event": "return", "func_name": "<module>", "globals": {"x": 12, "y": ["SPECIAL_FLOAT", "12.0"]}, "ordered_globals": ["x", "y"], "stack_to_render": [], "heap": {}, "stdout": "x and y are equal\nAll done.\n"}]}