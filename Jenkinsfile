pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/Ramarao3562/todo.git', credentialsId: '1ede85a3-4255-4aa7-9480-9fcb412376ba'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    bat 'npm install' // Windows
                    //sh 'npm install' // For Unix/Linux
                }
            }
        }
        
        stage('Build React App') {
            steps {
                script {
                    // Build the React application
                    bat 'npm run build' // Windows
                    //sh 'npm run build' // For Unix/Linux
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Move the build files to your deployment directory
                    // Replace "your-deployment-directory" with the path where you'd like to deploy
                    bat 'xcopy /E /I /Y build\\* C:\\your-deployment-directory' // Windows
                    //sh 'cp -R build/* /path/to/your/deployment-directory/' // For Unix/Linux
                }
            }
        }
    }
    
    post {
        always {
            cleanWs() // Clean up the workspace after each build
        }
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
