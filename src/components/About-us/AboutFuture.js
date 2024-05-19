import { Button } from "@mui/material";
import MKButton from "../MKButton";

function AboutFuture() {
  return (
    <div className="about-future ">
      <div className="button">
        <button className="btn btn-warning">معرفة المزيد</button>
      </div>
      <div className="info">
        <h1>ماذا عن اكاديمية المستقبل؟</h1>
        <p>
          تأسست اكاديمية المستقبل عام 2007 في مصر و في ماليزيا عام 2008 وبدأت
          نشاطها في دولة الإمارات العربية المتحدة منذ عام 2009 ، ومؤخرا أنشأت
          فرعها المستقل في الامارات حيث توافق إنشاؤها مع ما تشهده دولة الامارات
          العربية المتحدة ودول المنطقة، من تحول كبير نحو مفهوم الحكومة الذكية
          والإبداع المؤسسي وتطبيقات الذكاء الاصطناعي وتطوير منظومة التعليم
          لتتوافق مع تحديات المستقبل. <br />
        </p>
      </div>
    </div>
  );
}

export default AboutFuture;
