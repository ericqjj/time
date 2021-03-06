import wepy from 'wepy'

const url = 'https://api-m.mtime.cn/Movie/MovieComingNew.api'

export default function movieComingNew (locationId) {
  return new Promise((resolve) => {
    wepy.request({
      url,
      data: {
        locationId
      }
    }).then((data) => {
      if (data.statusCode === 200) {
        resolve({
          ms: data.data.attention.concat(data.data.moviecomings)
        })
      } else {
        console.log(data)
      }
    }).catch((e) => {
      throw new Error(e)
    })
  })
}
