pipeline {
  agent {
    docker { image 'node:16-alpine' }
  }
  stages {
    stage('Node Version Check') {
      steps {
        sh 'node --version'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
