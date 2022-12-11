/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      black:'#707070',
      white:'#FFFFFF',
    },

    screens:{ 
      sm:'443px',
      md:'750px',
      lg:'1024px'
    },
    
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },

      fontSize:{
        'fluid-28': 'clamp(18px,1.8vw,28px)',
        'fluid-31': 'clamp(20px,2vw,31px)',
        'fluid-33': 'clamp(22px,2vw,33px)',
        'fluid-37': 'clamp(25px,2vw,37px)',
        'fluid-43': 'clamp(28px,3vw,43px)', 
        'fluid-48': 'clamp(30px,3vw,48px)',
      },

      spacing:{
        center: '0 auto',
        'fluid-30': 'clamp(10px,1.8vw,30px)',
      },

      colors:{
        'after-banner':'#F7F6E7',
        'categories':'#EBE9CD',
        'manufacturers':'#F2D217',
        'after-manufacturers':'#137B45',
        'after-manufacturers-item':'#D8FFEB',
        'hot-categories':'#C4E4E6',
        'hot-categories-item':'#EDFCFD',
        'topic-one':'#BE84B8',
        'topic-two':'#68A3D3',
        'footer':'#F7F6E7',
        'item-1':'#F09344',
        'item-2':'#DFC7AF',
        'item-3':'#71C1B6',
        'item-4':'#B95C4C',
        'item-5':'#FECB68',
        'item-6':'#ADA0BF',
        'item-7':'#C6E5BD',
        'item-8':'#8FBBCE',
        'item-9':'#B2B192',
      },

      gridTemplateColumns:{
        'auto-fill-320':'repeat(auto-fill, minmax(clamp(200px,32%,320px),1fr))', 
        'auto-fill-270':'repeat(auto-fill, minmax(clamp(200px,20%,270px),1fr))', 
        'auto-fill-265':'repeat(auto-fill, minmax(clamp(180px,20%,265px),1fr))', 
        'auto-fill-470':'repeat(auto-fill, minmax(clamp(300px,25%,470px),1fr))', 
      },
    },
  },
  plugins: [],
}
