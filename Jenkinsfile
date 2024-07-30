pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('node:16-alpine').inside {
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    docker.image('node:16-alpine').inside {
                        sh 'npm run build'
                    }
                }
            }
        }
    }
}
