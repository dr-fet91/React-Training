import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import { TestContext } from './TestContext';
import TimeList from './TimeList';
import Timer from './Timer';


const App = () => {
  const [Title] = useState('hello my friend');
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([]);
  const handleSetIsLight = () => {
    setIsLight(!isLight);
  }

  /*
  ما تا الان برای انتقال داده ها بین کامپوننت ها از روش پراپ دریلینگ استفاده می کردیم
  اما اگه بخوایم یه استیت یا داده بین چند کامپوننت به اشتراک گذاشته بشه بهتره که از این روش کانتکست استفاده کنیم
  در این مثال ما یک کانتکست تعریف می کنیم که مقدار تایم ارر و ست تایم ارر توی خودش نگه میداره
  بعد اینو بین کامپوننت های دیگه مثل تایمر و تایم لیست به اشتراک می ذاریم

  */


  useEffect(()=>{
    console.log('use effect');
    return ()=>{

    }
  }, [isLight]);
 // اینجا از کاتکست برای به اشتراک گذاری استفاده کردیم و باید نقطه پرووایدر رو هم اینجا بیاریم و همچنین باید کانتکستو اینجا مقدار دهی کنیم
 // در این مثال ما میخوایم تابع و یک مقدار رو در کانتکست قرار بدیم
 // پس مقادیر به صورت قبلی در تایمر رو پاک می کنیم
 // object literal in line testContext.Provider 
  return (
    <TestContext.Provider value={{timeArr, setTimeArr}}>
    <div className='main' style={{backgroundColor: isLight ? 'white' : 'black'}}>
      <Hello Title={Title} />
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} />
      <TimeList />
    </div>
    </TestContext.Provider>
  );
}
export default App;