# Failed listMigrations at 2019-07-29T20:38:33.644Z
## RPC Input One Line
```json
{"id":1,"jsonrpc":"2.0","method":"listMigrations","params":{"projectInfo":"","sourceConfig":"datasource db {\n    provider = \"postgresql\"\n    url      = \"postgresql://vignesh:tcrocks@localhost:5432/test?schema=test\"\n}\n\ngenerator photonjs {\n    provider = \"photonjs\"\n    output   = \"node_modules/@generated/photon\"\n}\n\nmodel User {\n    id    String  @id @default(cuid())\n    name  String? @map(\"username\")\n    email String  @unique\n\n    @@map(\"users\")\n}\n\nmodel Post {\n    id         Int        @id\n    createdAt  DateTime   @default(now())\n    updatedAt  DateTime   @updatedAt\n    author     User\n    title      String\n    published  Boolean    @default(false)\n    categories Category[]\n}\n\nmodel Category {\n    id    Int    @id\n    name  String\n    posts Post[]\n}"}}
```

## RPC Input Readable
```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "listMigrations",
  "params": {
    "projectInfo": "",
    "sourceConfig": "datasource db {\n    provider = \"postgresql\"\n    url      = \"postgresql://vignesh:tcrocks@localhost:5432/test?schema=test\"\n}\n\ngenerator photonjs {\n    provider = \"photonjs\"\n    output   = \"node_modules/@generated/photon\"\n}\n\nmodel User {\n    id    String  @id @default(cuid())\n    name  String? @map(\"username\")\n    email String  @unique\n\n    @@map(\"users\")\n}\n\nmodel Post {\n    id         Int        @id\n    createdAt  DateTime   @default(now())\n    updatedAt  DateTime   @updatedAt\n    author     User\n    title      String\n    published  Boolean    @default(false)\n    categories Category[]\n}\n\nmodel Category {\n    id    Int    @id\n    name  String\n    posts Post[]\n}"
  }
}
```


## RPC Response
```
null
```

## Stack Trace
```bash
thread 'main' panicked at 'The user does not have root privelege and can not create a new database: QueryError(Error { kind: Connect, cause: Some(Os { code: 111, kind: ConnectionRefused, message: "Connection refused" }) }

stack backtrace:
   0: failure::backtrace::internal::InternalBacktrace::new::hb10b1386e7c8547e (0x55726a0b0c30)
   1: failure::backtrace::Backtrace::new::hf93e939a94d4538b (0x55726a0b0de0)
   2: prisma_query::connector::postgres::error::<impl core::convert::From<tokio_postgres::error::Error> for prisma_query::error::Error>::from::hc63f5b16f0201159 (0x557269cd9c17)
   3: prisma_query::connector::postgres::PostgreSql::new::h547d7d398f8003c0 (0x557269ccded6)
   4: sql_migration_connector::SqlMigrationConnector::postgres_helper::h68478333a2733391 (0x557269bb3fdc)
   5: sql_migration_connector::SqlMigrationConnector::exists::h23176d156e0fa2f9 (0x557269bb1eeb)
   6: migration_core::connector_loader::load_connector::h8d06d815e398bf8b (0x557269b5ec86)
   7: migration_core::migration_engine::MigrationEngine::init::hc4b5adfba0751987 (0x557269b55cc6)
   8: <F as jsonrpc_core::calls::RpcMethodSimple>::call::h2b7adabb0520f525 (0x557269b111ec)
   9: <F as jsonrpc_core::calls::RpcMethod<T>>::call::hd7d70c20d5e2ccd3 (0x557269b41355)
  10: <futures::future::lazy::Lazy<F,R> as futures::future::Future>::poll::h29cd2f157a6b9380 (0x557269b54b97)
  11: <futures::future::then::Then<A,B,F> as futures::future::Future>::poll::hf07422e18ceef08e (0x557269b41a1d)
  12: <futures::future::map::Map<A,F> as futures::future::Future>::poll::h0f23d57a9b222840 (0x557269b5dffe)
  13: <futures::future::either::Either<A,B> as futures::future::Future>::poll::h91e2864c7a85b73a (0x557269b54ed5)
  14: futures::task_impl::std::set::h70cdf01a74be43e4 (0x557269b9293a)
  15: std::thread::local::LocalKey<T>::with::h6ab4d55488f2a790 (0x557269b0d1b1)
  16: futures::future::Future::wait::h6ab43d23359d6f3b (0x557269b5de56)
  17: jsonrpc_core::io::IoHandler<M>::handle_request_sync::hf885c0b1be983ed4 (0x557269b3afbe)
  18: migration_core::rpc_api::RpcApi::handle::ha994a15c9a2b0f1d (0x557269b1aaf5)
  19: migration_engine::main::h4d2b9510e650aeb0 (0x557269b0c13a)
  20: std::rt::lang_start::{{closure}}::h8a08165519fcdc5f (0x557269b0c0e3)
  21: {{closure}} (0x55726a0d89b3)
             at src/libstd/rt.rs:49
      do_call<closure,i32>
             at src/libstd/panicking.rs:293
  22: __rust_maybe_catch_panic (0x55726a0dd84a)
             at src/libpanic_unwind/lib.rs:87
  23: try<i32,closure> (0x55726a0d957d)
             at src/libstd/panicking.rs:272
      catch_unwind<closure,i32>
             at src/libstd/panic.rs:388
      lang_start_internal
             at src/libstd/rt.rs:48
  24: main (0x557269b0c182)
  25: __libc_start_main (0x7fca9317eb6b)
  26: _start (0x557269b0be0a)
  27: <unknown> (0x0))', src/libcore/result.rs:997:5
stack backtrace:
   0: std::sys::unix::backtrace::tracing::imp::unwind_backtrace
             at src/libstd/sys/unix/backtrace/tracing/gcc_s.rs:39
   1: std::sys_common::backtrace::_print
             at src/libstd/sys_common/backtrace.rs:71
   2: std::panicking::default_hook::{{closure}}
             at src/libstd/sys_common/backtrace.rs:59
             at src/libstd/panicking.rs:197
   3: std::panicking::default_hook
             at src/libstd/panicking.rs:211
   4: std::panicking::rust_panic_with_hook
             at src/libstd/panicking.rs:474
   5: std::panicking::continue_panic_fmt
             at src/libstd/panicking.rs:381
   6: rust_begin_unwind
             at src/libstd/panicking.rs:308
   7: core::panicking::panic_fmt
             at src/libcore/panicking.rs:85
   8: core::result::unwrap_failed
   9: sql_migration_connector::SqlMigrationConnector::postgres_helper
  10: sql_migration_connector::SqlMigrationConnector::exists
  11: migration_core::connector_loader::load_connector
  12: migration_core::migration_engine::MigrationEngine::init
  13: <F as jsonrpc_core::calls::RpcMethodSimple>::call
  14: <F as jsonrpc_core::calls::RpcMethod<T>>::call
  15: <futures::future::lazy::Lazy<F,R> as futures::future::Future>::poll
  16: <futures::future::then::Then<A,B,F> as futures::future::Future>::poll
  17: <futures::future::map::Map<A,F> as futures::future::Future>::poll
  18: <futures::future::either::Either<A,B> as futures::future::Future>::poll
  19: futures::task_impl::std::set
  20: std::thread::local::LocalKey<T>::with
  21: futures::future::Future::wait
  22: jsonrpc_core::io::IoHandler<M>::handle_request_sync
  23: migration_core::rpc_api::RpcApi::handle
  24: migration_engine::main
  25: std::rt::lang_start::{{closure}}
  26: std::panicking::try::do_call
             at src/libstd/rt.rs:49
             at src/libstd/panicking.rs:293
  27: __rust_maybe_catch_panic
             at src/libpanic_unwind/lib.rs:87
  28: std::rt::lang_start_internal
             at src/libstd/panicking.rs:272
             at src/libstd/panic.rs:388
             at src/libstd/rt.rs:48
  29: main
  30: __libc_start_main
  31: _start

```
