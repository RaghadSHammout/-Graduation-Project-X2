// import icon from '../../assets/Icons/Shape.png';
//  export const ShowCardData=[
// {
//     title :'Aniket Roy',
//     h: 'From India',
//     des:"This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
//     icon: Array(5).fill(icon), // Repeat the icon 5 times
// },
// {
//     title :'Swaraj',
//     h: 'From India',
//     des:"A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
//     icon:icon,
// }
// //  ];
//  import icon from '../../assets/Icons/Shape.png';
// import icon1 from '../../assets/Icons/Shape (2).png';
// import icon2 from '../../assets/Icons/Shape (3).png';

//  export const ShowCardData = [
//      {
//          title: 'Aniket Roy',
//          h: 'From India',
//          des: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
//          icon: getIconsArray(5), // Repeat the icon 5 times
//      },
//      {
//          title: 'Swaraj',
//          h: 'From India',
//          des: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
//          icon: getIconsArray(4), // Repeat the icon 4 times
//          extraImages: [icon1, icon2], // صور مدمجة     
//          }
//  ];
 
//  function getIconsArray(times) {
//      let iconsArray = [];
//      for (let i = 0; i < times; i++) {
//          iconsArray.push(icon);
//      }
//      return iconsArray;
//  }
import icon from '../../assets/Icons/Shape.png';
import icon1 from '../../assets/Icons/Shape (2).png';
import icon2 from '../../assets/Icons/Shape (3).png';

export const ShowCardData = [
    {
        title: 'Aniket Roy',
        h: 'From India',
        des: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
        icon: getIconsArray(5), // Repeat the icon 5 times
        num:"5"
    },
    {
        title: 'Swaraj',
        h: 'From India',
        des: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
        icon: getIconsArray(4), // Repeat the icon 4 times
        extraImages: [icon1, icon2], // صور مدمجة
        num:"4.5"

    },  {
        title: 'Aniket Roy',
        h: 'From India',
        des: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
        icon: getIconsArray(5), // Repeat the icon 5 times
        num:"5"
    },
    {
        title: 'Swaraj',
        h: 'From India',
        des: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
        icon: getIconsArray(4), // Repeat the icon 4 times
        extraImages: [icon1, icon2], // صور مدمجة
        num:"4.5"

    },  {
        title: 'Aniket Roy',
        h: 'From India',
        des: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
        icon: getIconsArray(5), // Repeat the icon 5 times
        num:"5"
    },
    {
        title: 'Swaraj',
        h: 'From India',
        des: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
        icon: getIconsArray(4), // Repeat the icon 4 times
        extraImages: [icon1, icon2], // صور مدمجة
        num:"4.5"

    },  {
        title: 'Aniket Roy',
        h: 'From India',
        des: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
        icon: getIconsArray(5), // Repeat the icon 5 times
        num:"5"
    },
    {
        title: 'Swaraj',
        h: 'From India',
        des: "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
        icon: getIconsArray(4), // Repeat the icon 4 times
        extraImages: [icon1, icon2], // صور مدمجة
        num:"4.5"

    },
];

function getIconsArray(times) {
    let iconsArray = [];
    for (let i = 0; i < times; i++) {
        iconsArray.push(icon);
    }
    return iconsArray;
}
