import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';


//دیگه از روش بالا برای ساخت کامپوننت در ری اکت استفاده نمیشه
//در ورژن جدید از هوک ها استفاده میشه که در زیر کد معادل کد بالا رو نوشتیم
//درواقع کامپوننت نوع کلاسی نیست و نوع تابعی است
const App = () => {
  const [Title] = useState('hello my friend');
  const [isLight, setIsLight] = useState(false);
  const handleSetIsLight = () => {
    setIsLight(!isLight);
  }

  /*
  تمام کاری که در کامپوننت های نوع کلاسی با توابع لایف سایکل یا چرخه حیات انجام میدادیم
  در این روش با استفاده از هوک یوس افکت انجام میدیم
  طرز کاری تابع زیر به این صورت است
  جایی که بخوایم یه چیزی برای بار اول اجرا بشه اونو جای کنسول لاگی که نوشتیم میذاریم
  اگه بخوایم هنگام خروج از کامپوننت چیزی اجرا بشه اونو توی اون ریترنی که به صورت تابع هست می نویسیم
  و همچنین اگه خواستیم مواردی که میخوایم با تغییر استیتی در برنامه اجرا بشه
  اونو در اون بخش آرایه می نویسیم مثل همون ایزلایت
  یعنی اون کنسول لاگه وقتی ایزلایت تغییر کنه دوباره اجرا میشه
  ولی اگه خواستیم چیز مجزایی باشه باید چه کنیم؟

  */


  useEffect(()=>{
    console.log('use effect');
    return ()=>{

    }
  }, [isLight]);


  return (
    <div className='main' style={{backgroundColor: isLight ? 'white' : 'black'}}>
      <Hello Title={Title} />
      <Timer isLight={isLight} handleSetIsLight={handleSetIsLight} />
    </div>
  );
}
export default App;