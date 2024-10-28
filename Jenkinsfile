pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],  // Update this to your branch name
                    userRemoteConfigs: [[
                        url: 'https://github.com/Ramarao3562/todo.git',
                        credentialsId: 'your-credentials-id'  // Update to your actual credentials ID
                    ]]
                ])
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'  // Assuming your project uses npm
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    sh 'npm run build'  // Assuming you have a build script in package.json
                }
            }
        }
        stage('Deploy') {
            steps {
                // Your deployment steps here
            }
        }
    }
}
