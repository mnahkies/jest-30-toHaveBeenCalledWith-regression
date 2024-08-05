# Minimal reproduction for possible regression in jest@^30.0.0-alpha.4

Running:
```shell
yarn
jest ./index.spec.js
```

- Observe the test case `matches the second call with toHaveBeenCalledWith` fails.
- If you downgrade jest to `30.0.0-alpha.3` observe it passes.
