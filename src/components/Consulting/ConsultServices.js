import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

export const ConsultServices = () => {
  const consulting = [
    {
      icon: "fa ",
      to: "/consulting",
      name: "استشارات بناء الاستراتيجيات وفق نموذج العمل الابتكاري",
      text: "حيث تقوم ارتقاء ببناء استراتيجية مبتكرة وفق منهجية نموذج العمل وهي الأداء البصرية الحديثة في تطوير وخلق القيمة من المنتجات والخدمات المقدمة من الشركات للعملاء.",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "استراتيجية بناء الذكاء التنافسي",
      text: "وهي من الأساليب الحديثة لتعزيز المركز التنافسي للشركات حيث يتم الاعتماد على بناء نظم إدارية متعلقة بالمعلومات وتحليلها حول الأسواق والمتعاملين بها",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "استراتيجية تحقيق الربحية وبناء نموذج العمل الربحي",
      text: "وهي من البدائل الاستراتيجية التي تتبنها الشركات في ظل مراحل وظروف عمل الأسواق ووفق تطور البيئة التنافسية",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "إستشارات إعادة هيكلة الشركات",
      text: "وتعتمد على تقييم وتحليل جميع العمليات الإدارية والفنية والمالية وتحليل الوظائف وإعادة تقسيم وبناء نظم العمل وتطوير الموارد البشرية وتحسين هيكل التكلفة.",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "استراتيجيات التوسع في الأنشطة وبناء هيكل الاعمال الجديد للمنتجات والخدمات",
      text: "نقوم بدراسة البدائل المناسبة لفكرة التوسع وكيفية الانتقال من مراحله الي أخرى لتحسين المركز التنافسي للشركة وبناء نموذج الاستدامة والنمو.",
    },
    {
      icon: "fa ",
      to: "/consulting",
      name: "تقييم الإداء واعداد التقارير حول فرص نمو اعمال الشركة في السوق",
      text: "وهي دراسة تفصيلية لأعمال وانشطة الشركة وتقييم قدرتها التنافسية وتحليل نوعية الخدمات والمنتجات المقدمة ومعرفة نقاط وجوانب القوة والتحديات والفرص المحتملة وتقييم أداء وقدرات الموظفين والفنيين.",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "إعداد نموذج عمل الشركات الجديدة قبل بدأ التنفيذ والاستثمار",
      text: "وهي المرحلة السابقة للاستثمار وتختلف من مرحلة اعداد دراسة الجدوى المكلفة حيث يمكن من خلال نموذج العمل تحديد المتطلبات والتكلفة اللازمة لتأسيس الشركة ومنحى العمل الإبداعي الذي يحقق النجاح والربحية مستقبلا وفقا لنموذج العمل الابتكاري في ضوء متغيرات ومتطلبات العملاء وخدمات المنافسين وقدراتهم.",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "التعاقد الاداري لمتابعة الاعمال وخطط التشغيل (الرقابة الداخلية / الخارجية)",
      text: "هو عقد مساندة الاعمال والاشراف على تحقيق النتائج واعداد التقارير اللازمة لتعديل الإجراءات والأنشطة والاهداف لمساندة ادارة الشركة او المالك في اتخاذ القرارات وتحديد السياسات والاستراتيجيات التي تتبعها الشركة ولتجنب حدوث اية اعمال قد تؤدي الي حدوث الخسائر مبكرا",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "الإستشارات المالية والمحاسبية وتقييم المخاطر.",
      text: "هي استشارات لتحديد النظم المالية في إدارة التدفقات وتحديد عناصر التكلفة المثالية وفق طبيعة عمل الشركة وضبط إدارة النقدية في حالة القروض او مشروعات التوسع المستقبلية والمراجعة على ملف إدارة الحسابات كما نقدم دراسات في تكوين المحافظ المالية لشركات الاستثمار او البنوك للوصول الي الحد الأدنى من مخاطر الائتمان.",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "الاستشارات التسويقية",
      text: "وهي مجموعة الاعمال الاستشارية المتعلقة بالنشاط التسويقي من بحوث السوق وإعادة بناء المزيج التسويقي من تسعير وتوزيع وتصميم المنتج او الخدمة بما يتوافق مع خطط النمو المحتملة وإعادة تحديد الفئات المستهدفة وتحليلها ووضع خطط تسويقية بالأدوات المناسبة لطبيعة العملاء المستهدفين.",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "استشارات الانتقال الي نموذج الإنتاج الرشيد",
      text: "وهي تعديل مجموعة من الإجراءات ونظم العمل لتحقق اعلى إنتاجية بأقل تكلفة سواء للشركات الصناعية او الخدمية من اجل السيطرة على النمو لصالح الربحية او إعادة هيكلة الاعمال والأنشطة الداخلية للشركة.",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "sigma fit بناء منظومة ",
      text: "وهي تعد استراتيجية لتطوير العمليات في الشركة لحل المشكلات وتطوير القدرات وتحسين النتائج",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "استشارات تطوير الموارد البشرية وتكوين رأس المال البشري والمعرفي",
      text: "إعادة تقييم وتخطط الهيكل التنظيمي وإعادة تصميم وبناء الإجراءات والمهام وخطط التعلم والتدريب",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "استشارات تطوير الشركات العائلية وإعادة هيكلة منظومة العمل",
      text: "وتحديد الوثيقة العائلية لتحديد الاختصاصات والمسئوليات لدعم الاستدامة والنمو للأجيال التالية",
    },
    {
      icon: "fa ",
      to: "/Studies",
      name: "اعداد التصاميم الصناعية وتطبيقات الذكاء الاصطناعي",
      text: "هي دراسات لتصميم عمليات الإنتاج ورسم مخططات مسار العملية الإنتاجية عبر خطوط الإنتاج بناء على طبيعة المنتج والمساحات والطاقة المتاحة ودراسة استخدام التقنيات المتطورة مع تصميم تطبيقات الذكاء الاصطناعي بما يتوافق مع استراتيجيات الإنتاج الحديثة وما يتلاءم مع خطط مواجه المخاطر والتحديات الداخلية والخارجية.",
    },
  ];
  return (
    <div id="consultServices" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>الاستشارات</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {consulting
            ? consulting.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-4 hovering"
                  style={{
                    height: "270px",
                    // border: "solid red",
                    borderRadius: "20px",
                    margin: "5px",
                    background: "#f6f6f6",
                    // display: "flex",
                    // alignItems: "center",
                    // justifyItems: "center",
                  }}
                >
                  <i className={d.icon}> {i + 1} </i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
