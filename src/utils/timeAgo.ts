function timeAgo(unixTimestamp) {
  const now = Date.now()
  const timestamp = unixTimestamp * 1000
  const diffInSeconds = Math.floor((now - timestamp) / 1000)

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return `${minutes} minutes ago`
  } else {
    const hours = Math.floor(diffInSeconds / 3600)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const months = Math.floor(weeks / 4)
    const years = Math.floor(months / 12)

    if (years > 0) {
      return `${years} years ago`
    } else if (months > 0) {
      return `${months} months ago`
    } else if (weeks > 0) {
      return `${weeks} weeks ago`
    } else if (days > 0) {
      return `${days} days ago`
    } else if (hours > 0) {
      return `${hours} hours ago`
    }
  }
}

export default timeAgo
