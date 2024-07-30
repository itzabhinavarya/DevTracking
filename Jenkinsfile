pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh "npm install"
            }
        }
    }
}
