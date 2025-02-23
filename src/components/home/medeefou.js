import Typo from 'components/typography'

export const Medeefourth = () => {
  return (
    <div className="flex flex-col">
      <Typo variant="h3">Д. Жанчив: Технологийн хөгжил бидний амьдралыг илүү хялбарчилна.</Typo>
      <Typo variant="body" className="mt-[32px]">
        Би технологийн салбарт 10 дахь жилдээ ажиллаж байна. Улс нийгэмдээ хэрэгтэй, хүний өдөр тутмын асуудлыг шийдэж
        чаддаг учраас технологи, программ хангамжийн салбарт ажиллахдаа урам зоригтой байдаг. Манай байгууллага өмнө нь
        төрийн албаны шалгалт өгөхөд туслах E-Test, унадаг дугуйны UBike зэрэг аппликейшнүүдийг хөгжүүлсэн туршлагатай.
        Төрийн болон бизнесийн байгууллагуудын дунд зэрэглэлийн системүүдэд төвлөрч ажиллаад 5 жил болж байна.
      </Typo>
      <Typo variant="body" className="mt-[24px]">
        Хамгийн сүүлд Сонгуулийн ерөнхий хороо, ЛИЙД төгсөгчдийн холбоотой хамтран сонгуулийн ирцийг 12 насны ангилал,
        газарзүйн байршлаар нарийвчилж харуулах гар утасны аппликейшнийг бүтээлээ. Өмнө нь сонгуулийн хэсгийн хороод
        утсаар ярих байдлаар мэдээллээ солилцдог байсан бол гар утасны аппликейшн нэвтэрснээр энэхүү үйл явц
        хялбарчлагдаж QR код уншуулан ирцийн мэдээгээ илгээх боломжтой юм. Бид нар аппликейшнээ сар орчмын хугацаанд
        хөгжүүлсэн. Аппликейшн маань дараах 3 дэд хэсгээс бүрдэнэ.{' '}
      </Typo>
      <img src="./static/medee.svg" className="mt-[32px]"></img>
    </div>
  )
}
