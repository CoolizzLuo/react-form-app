import Footer from './components/Footer'


function App() {
  return (
    <>
      <div className="warpper">
        <h1>新拖延運動報名表單</h1>
        <div className="info">
          <p>活動日期：2020/12/10 ~ 2020/12/11</p>
          <p>活動地點：台北市大安區新生南路二段1號</p>
        </div>
        <p className="danger">* 必填</p>
        <form action="" className="lazy-form">
          <div className="input-block required">
            <label for="username">暱稱</label>
            <input type="text" id="username" name="username" placeholder="您的回答"/>
            <p className="input-error">請輸入暱稱</p>
          </div>
          <div className="input-block required">
            <label for="email">電子郵件</label>
            <input type="email" id="email" name="email" placeholder="您的電子郵件"/>
            <p className="input-error">請輸入電子郵件</p>
          </div>
          <div className="input-block required">
            <label for="phone">手機號碼</label>
            <input type="number" id="phone" name="phone" placeholder="您的手機號碼"/>
            <p className="input-error">請輸入手機號碼</p>
          </div>
          <div className="input-block required">
            <p>報名類型</p>
            <label>
              <input type="radio" name="type" value="1"/>&ensp; 躺在床上用想像力實作
            </label>
            <label>
              <input type="radio" name="type" value="2"/>&ensp; 趴在地上滑手機找現成的
            </label>
            <p className="input-error">請選擇報名類型</p>
          </div>
          <div className="input-block required">
            <label for="reason">怎麼知道這個活動的？</label>
            <input type="text" id="reason" name="reason" placeholder="您的回答"/>
            <p className="input-error">請填寫活動內容</p>
          </div>
          <div className="input-block">
            <label for="other">其他<p className="sub-title">對活動的一些建議</p></label>
            <input type="text" id="other" name="other" placeholder="您的回答"/>
            <p className="input-error"></p>
          </div>
          <input type="submit" className="submit" value="提交"/>
          <p className="message">請勿透過表單送出您的密碼。</p>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default App;
