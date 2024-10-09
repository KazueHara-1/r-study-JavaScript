```

...
socket 4879 is created.
socket 4881 is created.
socket 4883 is created.
node:events:495
      throw er; // Unhandled 'error' event
      ^

Error: connect ENOBUFS ::1:3000 - Local (undefined:undefined)
    at internalConnect (node:net:1100:16)
    at defaultTriggerAsyncIdScope (node:internal/async_hooks:462:18)
    at GetAddrInfoReqWrap.emitLookup [as callback] (node:net:1381:9)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:109:8)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  errno: -4060,
  code: 'ENOBUFS',
  syscall: 'connect',
  address: '::1',
  port: 3000
}

Node.js v18.20.3

```

詳細な情報は出てこなかったが、以下のような回答を見つけた。

> The number of sockets that can be open concurrently on a single Windows machine is limited by machine wide resources. There are no 'per process' limits that affect the number of sockets that can be open (except, perhaps, some per process non paged pool quotas that might be applied, but I've never come across this in the wild).  
> https://stackoverflow.com/questions/4861393/max-open-socket-connections
