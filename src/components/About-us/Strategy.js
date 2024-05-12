import stpic from "../../img/abpic.png";
import H2Edit from "../UtilitiesCont/H2Edit";
import H3Edit from "../UtilitiesCont/H3Edit";
import Paragraph from "../UtilitiesCont/Paragraph";
import StrSpTitle from "../UtilitiesCont/StrSpTitle";
function Strategy() {
  return (
    <div className="strategy">
      <StrSpTitle
        className="strategy-title"
        subtitle="معلومات عن"
        title="استراتجية اكاديمية المستقبل"
      />
      <div className="strategy-info">
        <div className="strategy-pic">
          <img src={stpic} alt="" />
        </div>
        <div className="st-content">
          <H2Edit
            props="بؤرة تركيز استراتيجية اكاديمية المستقبل في تطوير منظمات الاعمال
"
          />
          <Paragraph
            className="paragraph"
            props="ترتكز استراتيجية عمل الاكاديمية مع عملائها على تقديم منظومة اعمال
            وخدمات متكاملة في اطار علاقة إستراتيجية ذات أنشطة متصلة في مدى زمني
            قصير او متوسط المدى مع العملاء بحيث تكون خدماتنا جزء متكامل مع اعمال
            المؤسسات والجهات لتحفزها على نمو وتحسين الأنشط وتطوير الأداء."
          />
          <Paragraph
            className="paragraph"
            props="تخضع عمليتنا في العقود الاستشارية على التحليل الدقيق للأعمال
            والانشطة والعمليات والسياسات المختلفة بكل منظمة ودراسة فرص التحسين
            الإدارية والفنية وتطوير وتركيز الحلول المبنية على البعد الابتكاري."
          />
          <H2Edit props="سياسات جودة الخدمات" />
          <H3Edit props="المتابعة" />
          <Paragraph
            className="paragraph margin"
            props="إستمرار المتابعة في الخدمات الاستشارية المتكاملة، لضمان قابلية
            التطبيق مع متطلبات العملاء."
          />
          <H3Edit props="الإعتماد على الكفاءات" />
          <Paragraph
            className="paragraph margin"
            props="الإستعانة بالكفاءات المتخصصة ذات الخبرة في تقديم خدماتها مستفيدة من
          أفضل الممارسات العالمية."
          />

          <H3Edit props="منهجية العمل" />

          <Paragraph
            className="paragraph margin"
            props="
          تعتمد منهجية العمل في تقديم خدماتها على تكوين نموذج عمل لدمج المعرفة
          العلمية والخبرة مع بيئة العمل بمتخلف عناصرها – نموذج التعلم - للوصول
          الي النتائج المتوقعة عبر الحلول الابتكارية التي تعزز استدامة
          الأعمال."
          />
        </div>
      </div>
    </div>
  );
}

export default Strategy;
