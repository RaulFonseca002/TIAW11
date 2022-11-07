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

    var hourLocate;
    var choreNameLocate;
    var localLocate;
    var TODOlocate;
    var taskLocate;

    for(var c = 0; c<3; c++)
    {
        hourLocate = "hour" + c;
        const hour = agenda.chores[c].hour
        document.getElementById(hourLocate).textContent = hour;
    
        choreNameLocate = "choreName" + c;
        const choreName = agenda.chores[c].name
        document.getElementById(choreNameLocate).textContent = choreName;
    
        localLocate = "local" + c;
        const place = agenda.chores[c].place
        document.getElementById(localLocate).textContent = place;
    
    
        for(var i = 0; i<3; i++)
        {
            TODOlocate = "TODO" + i + c;
            const TODO = agenda.chores[c].todo[i].info
            document.getElementById(TODOlocate).textContent = TODO;
        }

    }

    for (var c = 0; c<6; c++)
    {
        taskLocate = "task" + c;
        const task = agenda.tasks[c].info
        document.getElementById(taskLocate).textContent = task;

    }
    
}

