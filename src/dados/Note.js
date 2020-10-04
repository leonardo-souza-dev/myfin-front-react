class Note {
  constructor(title, description, points, isBacklog, id, weekDay) {
    this.title = title ?? ""
    this.id = id ?? Math.floor(Math.random() * 10000) + 1
    this.description = description ?? ""
    this.points = points ?? 0
    this.isBacklog = isBacklog ?? true
    this.weekDay = weekDay ?? ""
  }

  setDao(dao){
    this.dao = dao
  }

  setPoints(points){
    this.points = points
    this.dao.update(this)
  }

  setDescription(description){
    this.description = description
    this.dao.update(this)
  }

  setTitle(title){
    this.title = title
    this.dao.update(this)
  }

  setIsBacklog(isBacklog){
    this.isBacklog = isBacklog
    this.dao.update(this)
  }

  setWeekDay(weekDay){
    this.weekDay = weekDay
    this.dao.update(this)
  }
}

export default Note;