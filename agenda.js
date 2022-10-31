import agenda from './agenda.json' assert{type: 'json'};
console.log(agenda);

document.body.onload = () => {
    let uid=1
    let idx = agenda.profiles.findIndex (elem => elem.id == uid)

    const name = agenda.profiles[idx].name
    document.getElementById('name').textContent = name;

    const title = agenda.profiles[idx].title
    document.getElementById('title').textContent = title;

    const status = agenda.profiles[idx].status
    document.getElementById('status').textContent = status;

    const hour = agenda.chores[idx].hour
    document.getElementById('hour').textContent = hour;

    const choreName = agenda.chores[idx].name
    document.getElementById('choreName').textContent = choreName;

    const place = agenda.chores[idx].place
    document.getElementById('local').textContent = place;

    const TODO1 = agenda.chores[0].todo[0].todo1.info
    document.getElementById('TODO1').textContent = TODO1;
    
}

