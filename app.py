from flask import Flask, render_template
from flask_frozen import Freezer
from dotenv import load_dotenv
import sys, os

load_dotenv()
print(f"FLASK_DEBUG: {os.getenv('FLASK_DEBUG')}")


app = Flask(__name__)
freezer = Freezer(app)

# Route for the homepage


@app.route('/')
def index():
    return render_template('index.html')

# Route for the projects page


@app.route('/projects/')
def projects():
    return render_template('projects.html')

# Route for the experience page


@app.route('/experience/')
def experience():
    return render_template('experience.html')

# Route for the contact page


@app.route('/contact/')
def contact():
    return render_template('contact.html')

# Dynamic route for project pages


@app.route('/projects/<path:path>/')
def project(path):
    try:
        return render_template(f'projects/{path}.html')
    except:
        return render_template('404.html'), 404


if __name__ == '__main__':
    # Check if 'build' argument is passed
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        output_dir = 'docs'
        app.config['FREEZER_DESTINATION'] = output_dir
        freezer = Freezer(app)

        freezer.freeze()
        
        # Create CNAME file
        cname_file_path = os.path.join(output_dir, 'CNAME')
        with open(cname_file_path, 'w') as cname_file:
            cname_file.write('eriherrera.com')

    else:
        # Run the Flask app for development
        debug_mode = os.getenv('FLASK_DEBUG', 'false').lower() == 'true'
        app.run(host='0.0.0.0', port=8000, debug=debug_mode, use_reloader=debug_mode)
