# `PORT` is already in use

If you get an error like this:

```bash
Error: listen EADDRINUSE: address already in use :::3000
```

It means that the port `3000` is already in use. You can either kill the process that is using the port or change the port in your local `.env` file.

To kill the process, run the following command:

List all IDs that is using port `3000`

```bash
lsof -t -i:3000
```

If problem still persists, try the following command to retrieve the PID this way:

```bash
sudo ss -lptn 'sport = :3000'
```

Kill the process using the PID

```bash
sudo kill -9 <PID>
```
