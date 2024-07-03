import { objectives } from './objectives.js'

const displayCurrentTime = document.getElementById('time')
const displayCurrentDay = document.getElementById('day')
const objectives_section = document.querySelector('.objectives_section')
const objectives_title = document.querySelector('.objectives_title')
const pagination = document.querySelector('.pagination')

const first_objective = document.querySelector('.first_objective')
const second_objective = document.querySelector('.second_objective')
const third_objective = document.querySelector('.third_objective')
const first_affirmation = document.querySelector('.first_affirmation')
const second_affirmation = document.querySelector('.second_affirmation')
const third_affirmation = document.querySelector('.third_affirmation')

var filteredObjectives = [];
var id = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current time and day
    const updateTimeAndDay = () => {
        const now = new Date();
        const timeZone = 'Africa/Lagos'
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: timeZone };
        const dayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  timeZone: timeZone};
        
        const currentTimeUTC = now.toLocaleTimeString('en-US', timeOptions);
        const currentDay = now.toLocaleDateString('en-US', dayOptions);

        displayCurrentTime.textContent = currentTimeUTC;
        displayCurrentDay.textContent = currentDay;
    };

    // Initial call to display the time and day
    updateTimeAndDay();
    
    // Update the time and day every second
    setInterval(updateTimeAndDay, 1000);

    

    document.querySelectorAll('a').forEach((_link) => {
        _link.addEventListener('click', () => {
            objectives.map(objective => {
                
                const section_name = objective.section_name;

                if (_link.matches(section_name)){
                    var identity = _link.className
                    filteredObjectives = objectives.filter(data=> {return data.section_name == `.${identity}`})
                    console.log(filteredObjectives)

                    objectives_section.setAttribute("id", `${section_name.slice(1, section_name.length)}`)
                    objectives_title.textContent = _link.textContent
                    console.log(objectives_section)

                    first_affirmation.textContent = filteredObjectives? ` ${filteredObjectives[0].first_affirmation}` : ''
                    second_affirmation.textContent = filteredObjectives? ` ${filteredObjectives[0].second_affirmation}` : ''
                    third_affirmation.textContent = filteredObjectives? ` ${filteredObjectives[0].third_affirmation}` : ''
                    first_objective.textContent = filteredObjectives? ` ${filteredObjectives[0].first_objective}` : ''
                    second_objective.textContent = filteredObjectives? ` ${filteredObjectives[0].second_objective}` : ''
                    third_objective.textContent = filteredObjectives? ` ${filteredObjectives[0].third_objective}` : ''

                     id = filteredObjectives && filteredObjectives[0].id
                     pagination.textContent = filteredObjectives && `Page ${filteredObjectives[0].id + 1}`
                    
                }


            })
            
        })
    })

    const previous = () => {
        
        console.log(id)
       if (id>0){
        id = id - 1
       first_affirmation.textContent = filteredObjectives? ` ${objectives[id].first_affirmation}` : ''
       second_affirmation.textContent = filteredObjectives? ` ${objectives[id].second_affirmation}` : ''
       third_affirmation.textContent = filteredObjectives? ` ${objectives[id].third_affirmation}` : ''
       first_objective.textContent = filteredObjectives? ` ${objectives[id].first_objective}` : ''
       second_objective.textContent = filteredObjectives? ` ${objectives[id].second_objective}` : ''
       third_objective.textContent = filteredObjectives? ` ${objectives[id].third_objective}` : ''
       objectives_title.textContent = filteredObjectives? ` ${objectives[id].title}` : ''
       pagination.textContent = filteredObjectives && `Page ${objectives[id].id + 1}`

       }  
   }

   const next = () => {
        
    console.log(id)
   if (id<7){
       id = id + 1
    first_affirmation.textContent = filteredObjectives? ` ${objectives[id].first_affirmation}` : ''
   second_affirmation.textContent = filteredObjectives? ` ${objectives[id].second_affirmation}` : ''
   third_affirmation.textContent = filteredObjectives? ` ${objectives[id].third_affirmation}` : ''
   first_objective.textContent = filteredObjectives? ` ${objectives[id].first_objective}` : ''
   second_objective.textContent = filteredObjectives? ` ${objectives[id].second_objective}` : ''
   third_objective.textContent = filteredObjectives? ` ${objectives[id].third_objective}` : ''
   objectives_title.textContent = filteredObjectives? ` ${objectives[id].title}` : ''
   pagination.textContent = filteredObjectives && `Page ${objectives[id].id + 1}`
   }  
}
   
   document.querySelector('.previous').addEventListener('click', previous)
   document.querySelector('.next').addEventListener('click', next)
   
});


