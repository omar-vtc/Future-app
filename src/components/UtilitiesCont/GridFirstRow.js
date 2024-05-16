import Grid from "@mui/material/Grid";
import TitleGridItem from "./TitleGridItem";
function GridFirstRow() {
  return (
    <>
      <Grid container spacing={2}>
        <TitleGridItem title="تقرير العمل" icon={2} width={5} />
        <TitleGridItem title="الجهة المستفيدة" icon={3} width={3} />
        <TitleGridItem title="الاعمال" icon={1} width={4} />
      </Grid>
    </>
  );
}

export default GridFirstRow;
