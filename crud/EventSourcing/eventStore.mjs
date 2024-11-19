export const eventList = [];

function addEvent(event){
    eventList.push(event);
    console.log(event);
}

function retrieveAccountByEvent(searchId){
    return eventList.find(({ id }) => id === searchId).payload;
}

export const eventStore = {
    addEvent,
    retrieveAccountByEvent
}