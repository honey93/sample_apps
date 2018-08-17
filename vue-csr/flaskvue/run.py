from flask import Flask, render_template
app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist/dist")
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/', defaults={'path': ''})
@app.route('/landing')
def catch_all():
    return render_template("index.html")
