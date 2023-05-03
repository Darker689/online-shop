import Banner from '../components/Banner';

const Home = () => {
  return (
    <>
      <Banner data={bannerdata1} height={'380px'} />
    </>
  )
}

export default Home;

let bannerdata1 = [
  {
    id: 1,
    category_id: 1,
    title: "Lorem ipsum dolor sit.",
    subtitle: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
    preview: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/dodge-muscle/desktop/SW_DodgeMuscle_Hero_banner_Desktop.jpg"
  },
  {
    id: 2,
    category_id: 1,
    title: "Lorem ipsum dolor sit.",
    subtitle: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
    preview: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2023/charger/srt/desktop/Desktop_Hero_Banner_01.jpg"
  }
]
let bannerdata2 = [
  {
    id: 1,
    category_id: 1,
    title: "Lorem ipsum dolor sit.",
    subtitle: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
    preview: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fdodge-challenger-rt-gm491137628-75596041&psig=AOvVaw2HqEw0hccGesNXe_h1Wjq_&ust=1683188439171000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODTjdrb2P4CFQAAAAAdAAAAABAE"
  },
  {
    id: 2,
    category_id: 1,
    title: "Lorem ipsum dolor sit.",
    subtitle: "Lorem ipsum dolor sit. Lorem ipsum dolor sit.",
    preview: "https://wallpapers.com/images/featured/uzl2dhn7hme5m9ng.jpg"
  }
]