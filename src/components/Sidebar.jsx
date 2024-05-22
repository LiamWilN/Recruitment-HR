import DataContents from '../assets/contents.details.json';

const Sidebar = (item) => {
  // Ensure that DataContents and NavigationLinks are defined
  if (DataContents && DataContents.NavigationLinks) {
      const MainItems = DataContents.NavigationLinks.find((items) => items.title === item);
      
      // Check if MainItems is defined before accessing its properties
      if (MainItems && MainItems.items) {
          return MainItems.items.map((i) => {
              return <div className='flex flex-col md:flex-row w-full h-1/6 md:h-full md:w-1/12' key={i.id}>{i.title} {console.log(i.title)}</div>;
          });
      }
  }

  // Return null if no items are found
  return null;
}

export default Sidebar
