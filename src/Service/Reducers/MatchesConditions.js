export default function(state=[], action) {
    let conditions = [];

    conditions[1] = {
        id: 1,
        conditions: "Условия 1"
    };

    conditions[2] = {
        id: 2,
        conditions: "Условия 2"
    };

    conditions[3] = {
        id: 3,
        conditions: "Условия 3"
    };

    return conditions
}