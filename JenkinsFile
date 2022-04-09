pipeline {
    agent any

    stages {
        stage('Build') {
            steps {sh "npm install"
                echo 'ess..'
            }
        }
        stage('Start') { 
            steps{script{
                withEnv(['JENKINS_NODE_COOKIE=dontkill']) {
                     sh "npm start &"
                }
            }
               
                }
        }
        stage('Test') {
            steps {
              sh "curl http://localhost:3000"
              echo 'Testing..'
            }
        }
       
        }
    }
