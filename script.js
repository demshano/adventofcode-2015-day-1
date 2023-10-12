const fs = require('fs');

// 1- what floor does santa end up on

// ( --> santa should go up 1 floor
// ) --> santa should go down 1 floor

function question1()
{
    fs.readFile('./santa.txt',(err,data)=>{
        console.time('q1 santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue)=>{
                if(currentValue === '(')
                {
                    return acc +=1
                }
                else if(currentValue === ')')
                {
                    return acc -=1
                }
        }, 0)
        console.timeEnd('q1 santa-time');
        console.log('answer: '+answer);
    })
}

question1()


// 2-when does santa first enter the basement

function question2()
{
    fs.readFile('./santa.txt', (err,data)=>{
        console.time('q2 santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator=0;
        let counter=0;
        const answer = directionsArray.some((currentValue)=>{
            if(currentValue === '(')
            {
                accumulator +=1
            }
            else if(currentValue === ')')
            {
                 accumulator -=1
            }
            counter++;
            return accumulator < 0;
        })
        console.timeEnd('q2 santa-time');
        console.log('basement entered at: ',counter);

    })
}
question2();