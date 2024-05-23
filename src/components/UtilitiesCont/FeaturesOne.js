// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "./Typography";

// Material Kit 2 React components
import MKBox from "./../MKBox/index";

import GridFirstRow from "./GridFirstRow";
import GridRow from "./GridRow";

function FeaturesOne() {
  return (
    <div>
      <Typography variant="h4" marked="center" align="center" component="h2">
        نماذج من اعمال الأكاديمية في مجال استشارات
      </Typography>
      <MKBox
        component="section"
        py={{ xs: 6, md: 6 }}
        // style={{ border: "solid red" }}
      >
        <Container>
          <Grid
            container
            alignItems="center"
            // style={{ border: "solid red" }}
            // rowSpacing={4}
          >
            <GridFirstRow />
            {/* <GridFeatures />
            <GridFeatures /> */}
            <GridRow
              attr1="وضع نظام الجائزة ليتناسب مع الأهداف التنموية
في دعم الابداع والابتكار في امارة ابوظبي
            "
              attr2="غرفة ابوظبي"
              attr3="تطوير نموذج عمل جائزة افضل فكرة مشروع"
            />
            <GridRow
              attr1="تحليل بيئة العمل لصاحبات رخصة مبدعة المنزلية
ووضع خطة لتطوير اعمال تلك الرخص"
              attr2="مجلس سيدات اعمال ابوظبي"
              attr3="اعداد دراسة لتطوير رخصة مبدعة"
            />
            <GridRow
              attr1="اعداد وتنفيذ مشروع لتمية ريادة الاعمال النسائية
              من برامج تدريبية واستشارية وفعاليات موجهة
              بالاحتياجات بالأداء لكل منشأة"
              attr2="غرفة ابوظبي – مجلس سيدات اعمال ابوظبي"
              attr3="اعداد مشروع متكامل لريادة الاعمال النسائية في
              ابوظبي"
            />
          </Grid>
        </Container>
      </MKBox>
    </div>
  );
}

export default FeaturesOne;
