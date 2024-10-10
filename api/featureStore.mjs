import {getKey} from "./redisClient.mjs";

export async function getFeature(code){
    const key = await getKey(code);
    if (key){
        return true;
    }
    else{
        return false;
    }
}

