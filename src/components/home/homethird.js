import { Typography } from 'components'

export const Homethird = () => {
  return (
    <div className="flex-col flex gap-28 items-end mt-32">
      <div className="w-496 mt-32 flex-col flex gap-10">
        <Typography variant="h1" className="text-primary-main">
          МАНЛАЙЛАГЧ. УР ЧАДВАР. АРДЧИЛАЛ.
        </Typography>
        <Typography variant="body">
          Монголд ардчиллыг бэхжүүлэх, манлайлагч залуусын ур чадварыг нэмэгдүүлэх зорилготой LEAD Mongolia хөтөлбөрийн
          төгсөгчдийн веб
        </Typography>
        <div className="flex items-center mt-16">
          <div className="bg-slate-200 w-14 h-14 rounded-full hover:cursor-pointer"></div>
          <Typography variant="body-semibold" className="ml-5 hover:cursor-pointer">
            Бичлэг үзэх
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default Homethird
