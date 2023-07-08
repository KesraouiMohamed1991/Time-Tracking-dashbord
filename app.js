
const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')

const twoCenter = document.querySelector('#two-center')
const threeCenter = document.querySelector('#three-center')
const fourCenter = document.querySelector('#four-center')
const fiveCenter = document.querySelector('#five-center')
const sixCenter = document.querySelector('#six-center')
const sevenCenter = document.querySelector('#seven-center')

const twoBottom = document.querySelector('#two-bottom')
const threeBottom = document.querySelector('#three-bottom')
const fourBottom = document.querySelector('#four-bottom')
const fiveBottom = document.querySelector('#five-bottom')
const sixBottom = document.querySelector('#six-bottom')
const sevenBottom = document.querySelector('#seven-bottom')


fetch('data.json')
    .then(response => response.json())
    .then(data => {


        let dailyfunction = () => {
            console.log(('one'))

            daily.style.color = 'white'
            weekly.style.color ='hsl(246, 80%, 60%)'
            monthly.style.color = 'hsl(246, 80%, 60%)'

            twoCenter.textContent = data[0].timeframes.daily.current + ' Hrs';
            threeCenter.textContent = data[1].timeframes.daily.current + ' Hrs';
            fourCenter.textContent = data[2].timeframes.daily.current + ' Hrs';
            fiveCenter.textContent = data[3].timeframes.daily.current + ' Hrs';
            sixCenter.textContent = data[4].timeframes.daily.current + ' Hrs';
            sevenCenter.textContent = data[5].timeframes.daily.current + ' Hrs';

            twoBottom.textContent = `Yesterday ${data[0].timeframes.daily.previous} Hrs`;
            threeBottom.textContent = `Yesterday ${data[1].timeframes.daily.previous} Hrs`;
            fourBottom.textContent = `Yesterday ${data[2].timeframes.daily.previous} Hrs`;
            fiveBottom.textContent = `Yesterday ${data[3].timeframes.daily.previous} Hrs`;
            sixBottom.textContent = `Yesterday ${data[4].timeframes.daily.previous} Hrs`;
            sevenBottom.textContent = `Yesterday ${data[5].timeframes.daily.previous} Hrs`  ;




        }
        let weeklyfunction = () => {
            console.log(('two'))
            daily.style.color = 'hsl(246, 80%, 60%)'
            weekly.style.color = 'white'
            monthly.style.color = 'hsl(246, 80%, 60%)'


            twoCenter.textContent = data[0].timeframes.weekly.current + ' Hrs';
            threeCenter.textContent = data[1].timeframes.weekly.current + ' Hrs';
            fourCenter.textContent = data[2].timeframes.weekly.current + ' Hrs';
            fiveCenter.textContent = data[3].timeframes.weekly.current + ' Hrs';
            sixCenter.textContent = data[4].timeframes.weekly.current + ' Hrs';
            sevenCenter.textContent = data[5].timeframes.weekly.current + ' Hrs';

            twoBottom.textContent = `Last-Week ${data[0].timeframes.weekly.previous} Hrs`;
            threeBottom.textContent = `Last-Week ${data[1].timeframes.weekly.previous} Hrs`;
            fourBottom.textContent = `Last-Week ${data[2].timeframes.weekly.previous} Hrs`;
            fiveBottom.textContent = `Last-Week ${data[3].timeframes.weekly.previous} Hrs`;
            sixBottom.textContent = `Last-Week ${data[4].timeframes.weekly.previous} Hrs`;
            sevenBottom.textContent = `Last-Week ${data[5].timeframes.weekly.previous} Hrs`;


        }
        let monthlyfunction = () => {
            console.log(('three'))

            daily.style.color = 'hsl(246, 80%, 60%)'
            weekly.style.color = 'hsl(246, 80%, 60%)'
            monthly.style.color = 'white'
            
            twoCenter.textContent = data[0].timeframes.monthly.current + ' Hrs';
            threeCenter.textContent = data[1].timeframes.monthly.current + ' Hrs';
            fourCenter.textContent = data[2].timeframes.monthly.current + ' Hrs';
            fiveCenter.textContent = data[3].timeframes.monthly.current + ' Hrs';
            sixCenter.textContent = data[4].timeframes.monthly.current + ' Hrs';
            sevenCenter.textContent = data[5].timeframes.monthly.current + ' Hrs';

            twoBottom.textContent = `Last-Month ${data[0].timeframes.monthly.previous}   Hrs`;
            threeBottom.textContent = `Last-Month ${data[1].timeframes.monthly.previous}   Hrs`;
            fourBottom.textContent = `Last-Month ${data[2].timeframes.monthly.previous}   Hrs`;
            fiveBottom.textContent = `Last-Month ${data[3].timeframes.monthly.previous}   Hrs`;
            sixBottom.textContent = `Last-Month ${data[4].timeframes.monthly.previous}   Hrs`;
            sevenBottom.textContent = `Last-Month ${data[5].timeframes.monthly.previous}   Hrs`;

        }

        daily.addEventListener('click', dailyfunction)
        weekly.addEventListener('click', weeklyfunction)
        monthly.addEventListener('click', monthlyfunction)

    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des données :', error);
    });




//this and advanced code provided by chatgpt 

// const daily = document.querySelector('.daily');
// const weekly = document.querySelector('.weekly');
// const monthly = document.querySelector('.monthly');

// const timeframes = ['daily', 'weekly', 'monthly'];

// const centers = document.querySelectorAll('[id$="-center"]');
// const bottoms = document.querySelectorAll('[id$="-bottom"]');

// fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         const updateContent = (timeframe) => {
//             return () => {
//                 console.log(timeframe);

//                 centers.forEach((center, index) => {
//                     center.textContent = data[index].timeframes[timeframe].current + ' Hrs';
//                 });

//                 bottoms.forEach((bottom, index) => {
//                     bottom.textContent = `Yesterday ${data[index].timeframes[timeframe].previous} Hrs`;
//                 });
//             };
//         };

//         daily.addEventListener('click', updateContent('daily'));
//         weekly.addEventListener('click', updateContent('weekly'));
//         monthly.addEventListener('click', updateContent('monthly'));
//     })
//     .catch(error => {
//         console.error('An error occurred while retrieving data:', error);
//     });









