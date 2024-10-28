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
                        credentialsId: '445f8c81-0683-457c-98ba-31756a8be5c8'  // Update to your actual credentials ID
                    ]]
                ])
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'  // Assuming your project uses npm
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    bat 'npm run build'  // Assuming you have a build script in package.json
                }
            }
        }
        stage('Deploy') {
            steps {
                // Your deployment steps here
               // Install gh-pages package
        bat 'npm install gh-pages --save-dev'

        // Build the project
        bat 'npm run build'

        // Deploy to GitHub Pages
        bat '''
        npx gh-pages -d build -r https://github.com/Ramarao3562/todo.git -b gh-pages --user "Ramarao3562 <atchi912@example.com>"
        '''
            }
        }
    }
}
