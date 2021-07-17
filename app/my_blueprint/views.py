import datetime
from flask import Blueprint, render_template
from BOFS.util import *
from BOFS.globals import db
from BOFS.admin.util import verify_admin

# The name of this variable must match the folder's name.
my_blueprint = Blueprint('my_blueprint', __name__,
                         static_url_path='/my_blueprint',
                         template_folder='templates',
                         static_folder='static')

# practice page
@my_blueprint.route("/practice", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def practice_results():
    if request.method == 'POST':
        log = db.chord()
        log.participantID = session['participantID']
        log.trialStart = request.form['trialStart']
        log.trialEnd = request.form['trialEnd']
        log.trialTime = request.form['trialTime']
        log.studyMode = request.form['studyMode']
        log.questionNumber=request.form['questionNumber']
        log.response=request.form['response']
        log.correct=request.form['correct']
        db.session.add(log)
        db.session.commit()
    return render_template("practice.html", example="This is example text.")

# study page
@my_blueprint.route("/study", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def study_results():
    if request.method == 'POST':
        log = db.chord()
        log.participantID = session['participantID']
        log.trialStart = request.form['trialStart']
        log.trialEnd = request.form['trialEnd']
        log.trialTime = request.form['trialTime']
        log.studyMode = request.form['studyMode']
        log.questionNumber=request.form['questionNumber']
        log.response=request.form['response']
        log.correct=request.form['correct']
        db.session.add(log)
        db.session.commit()
    return render_template("study.html", example="This is example text.")

# debrief
@my_blueprint.route("/debrief", methods=['POST', 'GET'])
@verify_correct_page
@verify_session_valid
def debrief():
    return render_template("debrief.html", example="This is example text.")

# route to view the database records and export them
@my_blueprint.route("/analysis")
@verify_admin
def analysis():
    results = db.session.query( db.Participant.participantID,
            db.func.count(db.MyTable.ID).label('tries')).\
        join(db.MyTable, db.MyTable.participantID == db.Participant.participantID).\
        filter(db.Participant.finished).\
        group_by(db.MyTable.participantID)

    return render_template("analysis.html", results=results)
