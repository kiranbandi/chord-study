def create(db):
    class chord(db.Model):
        __tablename__ = "chordV04"
        ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
        participantID = db.Column(db.Integer, db.ForeignKey('participant.participantID'))
        answeredOn = db.Column(db.DateTime, nullable=False, default=db.func.now())
        trialStart = db.Column(db.String)
        trialEnd = db.Column(db.String)
        trialTime = db.Column(db.String)
        mode = db.Column(db.String)
        Condition = db.Column(db.String)
        DataTypeOrder = db.Column(db.String)
        ChartType = db.Column(db.String)
        QuestionType = db.Column(db.String)
        DataType = db.Column(db.String)
        questionNumber = db.Column(db.String)
        overallQuestionNumber = db.Column(db.String)
        ErrorCount = db.Column(db.String)
    return chord




