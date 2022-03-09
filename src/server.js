import { createServer } from 'http';
import { once } from 'events';
import { randomUUID } from 'crypto';

const Database = new Map();
const Database2 = new Map();

function respondJSON(data, response){
    return response.end(JSON.stringify(data));
}

async function handler(request, response){
    const { method } = request;

    // if(method === 'GET'){
    //     return respondJSON([...Database.values()], response);
    // }

    if(method === 'POST'){

        const body = JSON.parse(await once(request, 'data'));
        const id = randomUUID();

        Database.set(id, body);

        return respondJSON({ ok: 1 }, response);
    }

    if(method === 'DELETE'){
        Database.clear();
        return respondJSON({ ok: 1 }, response);
    }
}

async function handler2(request, response){
    const { method } = request;

    if(method === 'GET'){
        return respondJSON([...Database2.values()], response);
    }
}

// export default createServer(handler);

const server1 = createServer(handler);
const server2 = createServer(handler2);

export { server1, server2 };