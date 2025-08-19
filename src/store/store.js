import {reactive} from "vue";

export const store = reactive({
    params: {
        total: 0,
        tip: 0,
        cantPeople: 0,
        remaining: 0,
    },

    people: [],
});

export function getGrandTotal(){
    return store.params.total * (store.params.tip / 100 + 1 )
    
}

export function calculate(){
    store.people = [];
    const total = store.params.total;
    const tip = store.params.tip;
    const cantPeople = store.params.cantPeople;
    const totalPorPerson = getGrandTotal() / cantPeople;

    store.params.remaining = getGrandTotal(0);

    for (let i = 0; i < cantPeople; i++) {
        store.people.push({
            id: crypto.randomUUID(),
            numberOfPerson : i+1,
            totalPorPerson,
            paid: false,
        });
    }
    calculateRemaining();
    console.log("gran total " + store.params.remaining );
}

function calculateRemaining(){
    const missinToPay = store.people.filter((item) => !item.paid);
    const remaining = missinToPay.reduce((acc, item) => (acc += item.totalPorPerson),0);

    store.params.remaining = remaining;
    console.log("CALCULANDO REMAINING " + store.params.remaining );

}

export function pay(id, paid){
    const person = store.people.find((item)=> item.id === id);
    if (person){
        person.paid = paid;
        calculateRemaining();
    }
}