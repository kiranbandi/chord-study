def create(db):
    class chord(db.Model):
        __tablename__ = "chordV01"
        ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
        participantID = db.Column(db.Integer, db.ForeignKey('participant.participantID'))
        answeredOn = db.Column(db.DateTime, nullable=False, default=db.func.now())
        trialStart = db.Column(db.String)
        trialEnd = db.Column(db.String)
        trialTime = db.Column(db.String)
        studyMode = db.Column(db.String)
        questionNumber = db.Column(db.String)
        response = db.Column(db.String)
        correct = db.Column(db.String)
        tMode = db.Column(db.String)
    return chord




