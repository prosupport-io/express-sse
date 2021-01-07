export interface SSE {
    init(req, res);
    updateInit(data);
    dropInit();
    send(data: string, event?: string, id?: string);
    sendToChannel(channel: string, data: string, event?: string, id?: string);
    sendToClient(client: string, data: string, event?: string, id?: string);
    serialize(data);
}
