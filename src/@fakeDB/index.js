//imports
import Chair from '../images/slider/02.jpg'
import Icecream from '../images/slider/03.jpg'
import Clock from '../images/slider/04.jpg'
import Caktus from '../images/slider/05.jpg'
import Lollipop from '../images/slider/06.jpg'
import Sliper from '../images/slider/07.jpg'
import Cup from '../images/slider/08.jpg'
import Headphone from '../images/slider/09.jpg'

import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
const mock = new MockAdapter(axios)

//import data


//data
const data = [
    {
        image: Chair,
        Title: "Title 1",
        Avetar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/495.jpg",
        description: "description 1",
        Tags: [],
        id: "1"
        },
        {
        image: Icecream,
        Title: "Title 2",
        Avetar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1125.jpg",
        description: "description 2",
        Tags: [],
        id: "2"
        },
        {
        image: Clock,
        Title: "Title 3",
        Avetar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg",
        description: "description 3",
        Tags: [],
        id: "3"
        },
        {
        image: Caktus,
        Title: "Title 4",
        Avetar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/448.jpg",
        description: "description 4",
        Tags: [],
        id: "4"
        },
        {
        image: Lollipop,
        Title: "Title 5",
        Avetar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1116.jpg",
        description: "description 5",
        Tags: [],
        id: "5"
        },
        {
        image: Sliper,
        Title: "Title 6",
        Avetar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/525.jpg",
        description: "description 6",
        Tags: [],
        id: "6"
        }
]

// ------------------------------------------------
// GET: GET All Data
// ------------------------------------------------
mock.onGet('/getData').reply(config => {
    return data ? [200, data] : [404]
})

// ------------------------------------------------
// POST: Add new Data
// ------------------------------------------------
mock.onPost('/addData').reply(config => {
    const { firstname, lastname } = JSON.parse(config.data)
    data.push({
        firstname,
        lastname
    })
    return [200]
})



//ignore
mock.onAny().passThrough()