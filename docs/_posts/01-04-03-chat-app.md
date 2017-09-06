---
title: Chat App
description:
author: Todd Baginski
category: ARCHITECTURE
---

{% include header.md %}

The Chat App is a very simple chat back-end application implemented with Ruby-on-Rails.
It does not include an authorization/authentication module, and has no user interface.

* Built on [Ruby](https://www.ruby-lang.org/en/).
* Uses a [PostgreSQL database](https://www.postgresql.org/). 

The Ruby Chat app exposes the following APIs:

| Action | Path                                     | Description         |
| ------ | ---------------------------------------- | ------------------- |
| POST   | /api/messages                            | Send a new message  |
| GET    | /api/messages/summary?to=*<receiver_id>* | Get message summary |
| GET    | /api/messages/unread?from=*<sender_id>*&to=*<receiver_id>* | Get unread messages |
{: .table .table-sm .table-striped}

*TODO: prebuilt docker image*