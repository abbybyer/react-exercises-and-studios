import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Books I've Theoretically Read bc I Don't Read Anymore";
   let book1 = "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpgle.com";
   let book2 = "https://m.media-amazon.com/images/I/8105Oc1+FPL.jpg";
   let book3 = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c4a79dd1-7f9a-4cb9-84ab-85dcda9b353e/dfxmhe9-17218f94-d379-484e-a2f4-f05e8d6d00c5.jpg/v1/fill/w_320,h_400,q_70,strp/spider_man__beyond_the_spider_verse__2024__by_car_gold_dfxmhe9-400t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcL2M0YTc5ZGQxLTdmOWEtNGNiOS04NGFiLTg1ZGNkYTliMzUzZVwvZGZ4bWhlOS0xNzIxOGY5NC1kMzc5LTQ4NGUtYTJmNC1mMDVlOGQ2ZDAwYzUuanBnIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.O5Hs3YotSbODM0nUrawTDjUTjM2-ha193VhBEsvhy9s";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} className={classes.bookImages} alt="Spiderman: Into the Spiderverse" />
         <img src={book2} className={classes.bookImages} alt="Spiderman: Across the Spiderverse" />
         <img src={book3} className={classes.bookImages} alt="Spiderman: Beyond the Spiderverse" />
      </div>      
   );
}