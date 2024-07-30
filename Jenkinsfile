pipeline {
  stages {
    stage('Checking Node Version') {
      steps {
        sh 'node --version'
      }
    }
    stage('Installing Dependencies') {
      steps {
        sh 'npm i'
      }
    }
    stage('Building Project') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
