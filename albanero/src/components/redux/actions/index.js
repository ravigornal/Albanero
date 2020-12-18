export const actions = {
    ADD_CARD :"ADD_CARD",
    DELETE_CARD :"DELETE_CARD",
}

export const addCard = (message) => ({
    type: actions.ADD_CARD,
    message
});

export const deleteCard = (id) => ({
    type: actions.DELETE_CARD,
    id
});




